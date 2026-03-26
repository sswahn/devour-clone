
function MobileUI() { 
  const bottomSheetOpen = useBottomSheet()
  const searchOpen = useSearch()
  const cameraActive = useCamera()

  return createPortal(
    <>
      {bottomSheetOpen && <BottomSheet />}
      {searchOpen && <SearchForm />}
      {cameraActive && <Camera />}
    </>, document.body)
  )
       
    {/* the following should go in App 
    <BottomSheetProvider>
      <SearchProvider>
        <CameraProvider>
          <Main />       
          <UIRoot />     
          <BottomNav />  {/* independent, (dispatch only) stable 
        </CameraProvider>
      </SearchProvider>
    </BottomSheetProvider>
  ) */}
}

export default MobileUI
