import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as IconMd from "react-icons/md";
import { saveAs } from "file-saver";

/* Import Info */
import "../../styles/style_info.scss";
import Products from "../../constants/Products";
import TextDescr from "../../models/info/TextDescr";
import TextStart from "../../models/info/TextStart";
import BtnInfo from "../../models/info/BtnInfo";
import TextTip from "../../models/info/TextTip";

/* Import Confirm */
import "../../styles/style_confirm.scss";
import LoadingConfirm from "../../models/confirm/LoadingConfirm";
import TextWait from "../../models/confirm/TextWait";
import TextWelcome from "../../models/confirm/TextWelcome";
import TextDescrConfirm from "../../models/confirm/TextDescrConfirm";
import FormConfirm from "../../models/confirm/FormConfirm";
import TextUserConfirm from "../../models/confirm/TextUserConfirm";
import BtnConfirm from "../../models/confirm/BtnConfirm";

/* Import Capture Registre */
import "../../styles/style_captureRegistre.scss";
import TextTopDocFront from "../../models/captureRegistre/docFront/TextTopDocFront";
import TextTipDocFront from "../../models/captureRegistre/docFront/TextTipDocFront";
import CaptureDocFront from "../../models/captureRegistre/docFront/CaptureDocFront";
import ModalDocFront from "../../models/captureRegistre/docFront/ModalDocFront";
import ImgDocFront from "../../models/captureRegistre/docFront/ImgDocFront";
import BtnCaptureDocFront from "../../models/captureRegistre/docFront/BtnCaptureDocFront";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Section */
      info: true,
      confirm: false,
      captureRegistre: false,

      /* States Confirm */
      loading: true,
      formConfirm: true,
      cpf: "",
      cpfConfirm: "",
      userCPf: "",
      userRegistrer: [],
      user: [],

      /* States Capture */
      typeDoc: "",
      disabledSelectDoc: false,
      typeDocText: "RG",
      typeCapture: "",
      docFront: true,
      docBack: false,
      selfieUser: false,
      docFrontCapture: null,
      viewDocFront: false,
    };
  }

  componentDidMount = () => {
    const userRegistrer = [
      {
        nome: "FERNANDO LEONARDO JOÃO MOREIRA ",
        celular: "(11) 9****0930",
        email: "t*********t@uorak.com",
      },
    ];

    this.setState({ userRegistrer: userRegistrer });
    this.setState({ cpf: "390.736." });
  };

  copyUrl = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("URL copiada para a área de transferência!");
    } catch (err) {
      // se o método writeText não for suportado, tenta o método antigo
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      toast.success("URL copiada para a área de transferência!");
    }
  };

  requestUserMedia = async () => {
    try {
      const constraints = { audio: false, video: { facingMode: "user" } };
      await navigator.mediaDevices.getUserMedia(constraints);
    } catch (err) {
      console.error(err);
    }
  };

  loadingConfirm = () => {
    this.setState({ info: false, confirm: true });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1500);
  };

  cpfChange = (e) => {
    const cpf = e;

    if (cpf !== null || cpf !== "") {
      this.setState({ cpfConfirm: cpf.replace(/[^\d]/g, "") });
    }
  };

  searchUSer = () => {
    console.log(this.state.cpfConfirm.length);
    let userArray = [];
    if (
      this.state.cpfConfirm === null ||
      this.state.cpfConfirm === "" ||
      this.state.cpfConfirm.length < 5
    ) {
      toast.error(
        "É necessario preencher os ultimos 5 digitos do CPF para poder prosseguir!"
      );
    } else {
      // eslint-disable-next-line array-callback-return
      this.state.userRegistrer.map((user) => {
        userArray.push(user);
      });

      this.setState({
        user: userArray,
      });
      const cpfUser = this.state.cpf + this.state.cpfConfirm;

      this.setState({ cpfUser: cpfUser, formConfirm: false });
    }
  };

  confirmUser = () => {
    this.setState({
      confirm: false,
      captureRegistre: true,
      typeCapture: "FrenteDoc",
    });
  };

  changeDoc = (e) => {
    this.setState({ typeDoc: e.target.value, typeDocText: e.target.value });
  };

  captureDocFront = (img) => {
    this.setState({
      docFrontCapture: img,
      viewDocFront: true,
      disabledSelectDoc: true,
    });
  };

  handleDownload = () => {
    const docfront = this.state.docFrontCapture;
    const byteString = atob(docfront.split(",")[1]);
    const mimeString = docfront.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([ab], { type: mimeString });
    saveAs(
      blob,
      this.state.typeDocText + "_" + this.state.typeCapture + ".jpg"
    );
  };

  render() {
    return (
      <>
        {/* Section Info */}
        {this.state.info ? (
          <section className="info">
            {Products.info.textTop && <TextStart />}
            {Products.info.textDescr && <TextDescr />}
            {Products.info.textTip && <TextTip />}
            {Products.info.btnInfoCopyClipboard && (
              <BtnInfo
                actionClick={() => this.copyUrl()}
                btnName={
                  "Se quiser continuar em outro dispositivo, clique aqui para copiar o link e cole onde desejar!"
                }
                iconButtonLeft={<IconMd.MdContentCopy />}
                classNameBtnInfo="btnCopyInfo"
                iconLeftInfo="iconBtnCopyInfo"
              />
            )}

            {Products.info.btnInfo && (
              <BtnInfo
                actionClick={() => this.loadingConfirm()}
                btnName={" Vamos Começar!"}
                iconButtonRight={<IconMd.MdArrowRightAlt />}
                classNameBtnInfo="btnStart"
                iconLeftInfo="iconBtnCopyInfo"
              />
            )}

            <ToastContainer
              position="top-right"
              autoClose={1500}
              hideProgressBar={false}
            />
          </section>
        ) : null}

        {/* Section Confirm */}
        {this.state.confirm ? (
          <section className="confirm">
            {this.state.loading ? (
              <div>
                {Products.confirm.textWait && <TextWait />}
                {Products.confirm.loadingConfirm && <LoadingConfirm />}
              </div>
            ) : (
              <div>
                {Products.confirm.textWelcomeConfirm && <TextWelcome />}
                {Products.confirm.textDescrConfirm && <TextDescrConfirm />}
                {this.state.formConfirm ? (
                  Products.confirm.formConfirm && (
                    <>
                      <FormConfirm
                        cpfUser={this.state.cpf}
                        userChange={this.state.cpfConfirm}
                        userChangeConfirm={(e) =>
                          this.cpfChange(e.target.value)
                        }
                        btnConfirmForm={() => this.searchUSer()}
                        btnName={"Pesquisar"}
                      />
                      <ToastContainer
                        position="top-right"
                        autoClose={1500}
                        hideProgressBar={false}
                      />
                    </>
                  )
                ) : (
                  <>
                    {Products.confirm.textUserConfirm &&
                      this.state.user.map((use) => {
                        return (
                          <TextUserConfirm
                            key={use}
                            nameUser={use.nome}
                            phoneUser={use.celular}
                            emailUser={use.email}
                            userCPF={this.state.cpfUser}
                          />
                        );
                      })}

                    {Products.confirm.btnConfirm && (
                      <BtnConfirm
                        btnName={"Confirmar"}
                        actionClick={() => this.confirmUser()}
                      />
                    )}
                  </>
                )}
              </div>
            )}
          </section>
        ) : null}

        {this.state.captureRegistre ? (
          <section className="captureRegistre">
            {this.state.docFront ? (
              <>
                {Products.captureRegistre.docFront.textTop && (
                  <TextTopDocFront />
                )}
                {Products.captureRegistre.docFront.textTip && (
                  <TextTipDocFront />
                )}
                {Products.captureRegistre.docFront.modalDocFront && (
                  <ModalDocFront
                    nameBtn={"Capturar Foto "}
                    selectDoc={this.state.disabledSelectDoc}
                    optionRg={"RG"}
                    optionCnh={"CNH"}
                    changeDoc={this.state.typeDoc}
                    changeDocConfirm={(e) => this.changeDoc(e)}
                    modalHeader={this.state.typeDocText + " Frente"}
                    modalBody={
                      Products.captureRegistre.docFront.captureDocFront &&
                      this.state.viewDocFront === false ? (
                        <CaptureDocFront capture={this.captureDocFront} />
                      ) : (
                        <>
                          {Products.captureRegistre.docFront.imgDocFront && (
                            <ImgDocFront
                              titleImgDocFront={
                                this.state.typeDocText + " Frente"
                              }
                              imgDocFront={this.state.docFrontCapture}
                            />
                          )}
                          {Products.captureRegistre.docFront
                            .btnCaptureDocFront && (
                            <BtnCaptureDocFront
                              btnNameReset={"Tirar Novamente"}
                              btnNameConfirm={"Confirmar Foto"}
                              actionBtnReset={() =>
                                this.setState({
                                  docFrontCapture: null,
                                  viewDocFront: false,
                                  disabledSelectDoc: false,
                                })
                              }
                              actionBtnConfirm={() => this.handleDownload()}
                            />
                          )}
                        </>
                      )
                    }
                  />
                )}
              </>
            ) : (
              <></>
            )}
          </section>
        ) : null}
      </>
    );
  }
}
