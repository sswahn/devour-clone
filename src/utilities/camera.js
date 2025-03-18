const camera = {
  // remove async
  async on(constraints = {}) {
    if (!(constraints instanceof Object) || Array.isArray(constraints)) {
      throw new TypeError('on: argument must be an object literal.')
    }
    const defaultConstraints = {
      audio: {
        echoCancellation: true,
        sampleRate: 48000
      },
      video: {
        facingMode: 'environment',

        width: { ideal: 99999 },
        height: { ideal: 99999 },
        frameRate: { ideal: 999 },
        
        aspectRatio: {
          ideal: window.innerWidth / window.innerHeight
        }
      }
    }
    const finalConstraints = {
      ...defaultConstraints,
      ...constraints
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia(finalConstraints)
      const track = stream.getVideoTracks()[0];
      const capabilities = track.getCapabilities(); // Get device capabilities

      console.log("Camera Capabilities:", capabilities);

      return capabilities
      
      return navigator.mediaDevices.getUserMedia(finalConstraints)
    } catch (error) {
      throw new Error(`Error accessing camera. ${error}`)
    }
  },
  off(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('off: argument must be an instance of MediaStream.')
    }
    try {
      stream.getTracks().forEach(track => track.stop())
    } catch (error) {
      throw new Error(`Error accessing camera. ${error}`)
    }
  },
  light(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('light: argument must be an instance of MediaStream.')
    }
    let constraints = undefined
    const videoTracks = stream.getVideoTracks()
    if (!videoTracks.length) {
      throw new Error('No video tracks available.')
    }
    const videoTrack = videoTracks[0]
    // Check if the fillLightMode constraint is supported
    if (videoTrack.getCapabilities().hasOwnProperty('fillLightMode')) {
        constraints = { fillLightMode: 'flash' }
    }
    // Check if the torch constraint is supported
    if (videoTrack.getCapabilities().hasOwnProperty('torch')) {
        constraints = { advanced: [{ torch: true }] }
    }
    if (!constraints) {
        throw new Error('This device has no torch.')
    }
    // Turn on the camera light
    return videoTrack.applyConstraints(constraints)
  },
  dark(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('dark: argument must be an instance of MediaStream.')
    }
    let constraints = undefined
    const videoTracks = stream.getVideoTracks()
    if (!videoTracks.length) {
      throw new Error('No video tracks available.')
    }
    const videoTrack = videoTracks[0]
    // Check if the fillLightMode constraint is supported
    if (videoTrack.getCapabilities().hasOwnProperty('fillLightMode')) {
        constraints = { fillLightMode: 'off' }
    }
    // Check if the torch constraint is supported
    if (videoTrack.getCapabilities().hasOwnProperty('torch')) {
        constraints = { advanced: [{ torch: false }] }
    }
    if (!constraints) {
        throw new Error('This device has no torch.')
    }
    // Turn off the camera light
    return videoTrack.applyConstraints(constraints)
  },
  async takePhoto(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('takePhoto: argument must be an instance of MediaStream.')
    }
    const track = stream.getVideoTracks()[0]
    const imageCapture = new ImageCapture(track)
    return imageCapture.takePhoto()
      
    /*
    const canvas = new OffscreenCanvas(videoElement.videoWidth, videoElement.videoHeight)
    const ctx = canvas.getContext("2d")
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
    return canvas.convertToBlob({ type: "image/webp" }) // Attempt lossless WebP
    */
  },
  mute(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('mute: argument must be an instance of MediaStream.')
    }
    const audioTracks = stream.getAudioTracks()
    if (audioTracks.length === 0) {
        throw new Error('No audio tracks found.')
    }
    audioTracks.forEach(track => {
        track.enabled = false;
    })
  },
  unmute(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('unmute: argument must be an instance of MediaStream.')
    }
    const audioTracks = stream.getAudioTracks()
    if (audioTracks.length === 0) {
        throw new Error('No audio tracks found.')
    }
    audioTracks.forEach(track => {
        track.enabled = true;
    })
  },
  startRecording(stream, frames) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('startRecording: first argument must be an instance of MediaStream.')
    }
    if (!Array.isArray(frames)) {
      throw new TypeError('startRecording: second argument must be an array.')
    }
    const options = {
      mimeType: 'video/webm; codecs=vp9,opus',
      videoBitsPerSecond: 5000000, // High video quality
      audioBitsPerSecond: 192000   // Force 192 kbps audio quality
    }
    const mediaRecorder = new MediaRecorder(stream, options)
    mediaRecorder.ondataavailable = event => {
      frames.push(event.data)
    }
    mediaRecorder.start()
    return mediaRecorder
  },
  stopRecording(mediaRecorder, frames) {
    if (!(mediaRecorder instanceof MediaRecorder)) {
      throw new TypeError('stopRecording: first argument must be an instance of MediaRecorder.')
    }
    if (!Array.isArray(frames)) {
      throw new TypeError('stopRecording: second argument must be an array.')
    }
    return new Promise((resolve, reject) => {
      try {
        mediaRecorder.onstop = async () => {
          const blob = new Blob(frames, { type: 'video/webm' })
          frames.length = 0
          resolve(blob)
        }
        mediaRecorder.onerror = event => {
          reject(`Recording error: ${event.error}`)
        }
        mediaRecorder.stop()
      } catch (error) {
        throw new Error(`Error accessing camera. ${error}`)
      }
    })
  }
}

export default camera
