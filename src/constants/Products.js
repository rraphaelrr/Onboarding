// eslint-disable-next-line import/no-anonymous-default-export
export default {
  api: {
    homolog: true,
    production: false,
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
  },

  captureRegistre: {
    docFront: {
      textTop: true,
      textTip: true,
      captureDocFront: true,
      modalDocFront: true,
      imgDocFront: true,
      btnCaptureDocFront: true,
    },
    docBack: {
      textTop: false,
    },
    selfieUser: {
      textTop: false,
    },
  },
};
