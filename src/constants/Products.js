// eslint-disable-next-line import/no-anonymous-default-export
export default {
  api: {
    dev: false,
    qa: false,
    qa2: true,
    deploy: false,
  },

  components: {
    header: true,
    footer: false,
  },

  info: {
    textTop: true,
    textDescr: true,
    textTip: true,
    btnInfoCopyClipboard: true,
    btnInfo: true,
  },

  confirm: {
    loadingConfirm: true,
    textWait: true,
    textWelcomeConfirm: true,
    btnConfirm: true,
    textDescrConfirm: true,
    formConfirm: true,
    textUserConfirm: true,
    modalConfirm: true,
  },

  captureRegistre: {
    docFront: {
      textTop: true,
      textTip: true,
      captureDocFront: true,
      modalDocFront: true,
      imgDocFront: true,
      btnCaptureDocFront: true,
      confirmCapture: true,
    },
    docBack: {
      textTop: true,
      textTip: true,
      captureDocBack: true,
      modalDocBack: true,
      imgDocBack: true,
      btnCaptureDocBack: true,
      confirmCapture: true,
    },
    selfieUser: {
      textTop: true,
      textTip: true,
      captureSelfie: true,
      modalSelfie: true,
      imgSelfie: true,
      btnCaptureSelfie: true,
      confirmCapture: true,
    },
    loadingCompleteRegister: true,
  },

  registerComplete: {
    textTopRegisterComplete: true,
    textTipTop: true,
    textNotice: true,
    textTipEnd: true,
    btnRegisterComplete: true,
  },
};
