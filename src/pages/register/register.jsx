/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as IconMd from "react-icons/md";
import { isMobile } from "react-device-detect";
import Info from "../../constants/Info";
import * as Function from "../../constants/Functions";
import * as Format from "../../constants/Format";

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
import ModalConfirm from "../../models/confirm/ModalConfirm";

/* Import Capture Registre */
import "../../styles/style_captureRegistre.scss";
import TextTopDocFront from "../../models/captureRegistre/docFront/TextTopDocFront";
import TextTipDocFront from "../../models/captureRegistre/docFront/TextTipDocFront";
import CaptureDocFront from "../../models/captureRegistre/docFront/CaptureDocFront";
import ModalDocFront from "../../models/captureRegistre/docFront/ModalDocFront";
import ImgDocFront from "../../models/captureRegistre/docFront/ImgDocFront";
import BtnCaptureDocFront from "../../models/captureRegistre/docFront/BtnCaptureDocFront";
import CaptureConfirmDocFront from "../../models/captureRegistre/docFront/CaptureConfirmDocFront";

import TextTopDocBack from "../../models/captureRegistre/docBack/TextTopDocBack";
import TextTipDocBack from "../../models/captureRegistre/docBack/TextTipDocBack";
import CaptureDocBack from "../../models/captureRegistre/docBack/CaptureDocBack";
import ModalDocBack from "../../models/captureRegistre/docBack/ModalDocBack";
import ImgDocBack from "../../models/captureRegistre/docBack/ImgDocBack";
import BtnCaptureDocBack from "../../models/captureRegistre/docBack/BtnCaptureDocBack";
import CaptureConfirmDocBack from "../../models/captureRegistre/docBack/CaptureConfirmDocBack";

import TextTopSelfie from "../../models/captureRegistre/selfieUser/TextTopSelfie";
import TextTipSelfie from "../../models/captureRegistre/selfieUser/TextTipSelfie";
import CaptureSelfie from "../../models/captureRegistre/selfieUser/CaptureSelfie";
import ModalSelfie from "../../models/captureRegistre/selfieUser/ModalSelfie";
import ImgSelfie from "../../models/captureRegistre/selfieUser/ImgSelfie";
import BtnCaptureSelfie from "../../models/captureRegistre/selfieUser/BtnCaptureSelfie";
import CaptureConfirmSelfie from "../../models/captureRegistre/selfieUser/CaptureConfirmSelfie";
import ModalCompleteRegister from "../../models/captureRegistre/selfieUser/ModalCompleteRegister";

/* Import Register Complete */
import "../../styles/style_registerComplete.scss";
import TextTopRegisterComplete from "../../models/registerComplete/TexTopRegisterComplete";
import TextTipTop from "../../models/registerComplete/TextTipTop";
import TextNotice from "../../models/registerComplete/TextNotice";
import TextTipEnd from "../../models/registerComplete/TextTipEnd";
import BtnRegisterComplete from "../../models/registerComplete/BtnRegisterComplete";

export default class Register extends Component {
  constructor(props) {
    super(props);
    global.userAgentBrowser = window.navigator.userAgent;
    this.state = {
      code: "07583225",

      /* Section */
      info: true,
      confirm: false,
      captureRegistre: false,
      registerComplete: false,

      /* States Confirm */
      loading: true,
      formConfirm: true,
      cpf: "",
      cpfConfirm: "",
      userCPf: "",
      userRegistrer: [],
      user: [],
      confirmLoading: false,

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

      docBackCapture: null,
      viewDocBack: false,

      selfieCapture: null,
      viewSelfie: false,

      confirmCaptureFront: false,
      confirmCaptureBack: false,
      confirmCaptureSelfie: false,
      loadingCompleteRegister: false,
    };
  }

  componentDidMount = () => {
    let urlProjeto = window.location.href.split("/").slice(0, -1).join("/");
    console.log(urlProjeto);
    console.log(global.userAgentBrowser);
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      navigator.mediaDevices.getUserMedia({ video: true });
    }

    const dados = this.state.code;

    Function.consultingUserInfo(dados).then((res) => {
      console.log(res.partialIdentity);
      this.setState({
        cpf: Format.docPartialMask(res.partialIdentity),
      });
    });
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
      this.setState({ cpfConfirm: cpf });
    }
  };

  searchUSer = async () => {
    const cpf = this.state.cpf + this.state.cpfConfirm;

    if (
      this.state.cpfConfirm === null ||
      this.state.cpfConfirm === "" ||
      this.state.cpfConfirm.replace(/[^\d]/g, "").length < 5
    ) {
      toast.error(
        "É necessario preencher os ultimos 5 digitos do CPF para poder prosseguir!"
      );
    } else {
      this.setState({ confirmLoading: true });
      const dados = {
        code: this.state.code,
        cpf: Format.removeDocMask(cpf),
      };
      console.log(dados);
      Function.getMemberInformation(dados).then((res) => {
        if (res.resultCode == 1) {
          this.setState({ confirmLoading: false });
          toast.error(res.resultMessage);
        } else {
          this.setState({
            user: res.item,
            cpfUser: cpf,
            formConfirm: false,
            confirmLoading: false,
          });
        }
      });
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

  captureDocBack = (img) => {
    this.setState({
      viewDocBack: true,
      docBackCapture: img,
      viewDocFront: false,
    });
  };

  captureSelfie = (img) => {
    this.setState({
      selfieCapture: img,
      viewSelfie: true,
    });
  };

  confirmCaptureDocFront = (id) => {
    if (id == 1) {
      document.getElementById("modalFront").style.visibility = "visible";
      this.setState({
        viewDocFront: false,

        confirmCaptureFront: false,
        docFrontCapture: null,
        disabledSelectDoc: false,
      });
    } else if (id == 2) {
      this.setState({
        docFront: false,
        docBack: true,
        confirmCapture: false,
        docBackCapture: null,
      });
    }
  };

  confirmCaptureDocBack = (id) => {
    if (id == 1) {
      document.getElementById("modalBack").style.visibility = "visible";
      this.setState({
        confirmCaptureBack: false,
        docBackCapture: null,
        viewDocBack: false,
      });
    } else if (id == 2) {
      this.setState({
        docBack: false,
        selfieUser: true,
      });
    }
  };

  confirmCaptureSelfie = (id) => {
    if (id == 1) {
      document.getElementById("modalSelfie").style.visibility = "visible";
      this.setState({
        confirmCaptureSelfie: false,
        selfieCapture: null,
        viewSelfie: false,
      });
    } else if (id == 2) {
      if (isMobile) {
        document.getElementById("modalSelfieConfirm").style.visibility =
          "hidden";
        this.setState({ loadingCompleteRegister: true });
      } else {
        this.setState({ loadingCompleteRegister: true });
      }
      const dados = {
        codigo: this.state.code,
        identity: this.state.cpf,
        browserUserAgent: global.userAgentBrowser,
        docFrente: this.state.docFrontCapture,
        docVerso: this.state.docBackCapture,
        facematch: this.state.selfieCapture,
      };
      Function.setPictures(dados).then((res) => {
        console.log(res);
        if (res.resultCode == 0) {
          this.setState({
            selfieUser: false,
            captureRegistre: false,
            loadingCompleteRegister: false,
            registerComplete: true,
          });
        }
      });
    }
  };

  render() {
    return (
      <div>
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
              autoClose={2000}
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
                  <div>
                    {Products.confirm.formConfirm && (
                      <div>
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
                          autoClose={2000}
                          hideProgressBar={false}
                        />
                        {Products.confirm.modalConfirm && (
                          <ModalConfirm
                            showLoading={this.state.confirmLoading}
                            modalHeader={
                              "So um momento, estamos buscando seus dados"
                            }
                          />
                        )}
                      </div>
                    )}
                    {Products.confirm.modalConfirm && (
                      <ModalConfirm showLoading={this.state.loadingConfirm} />
                    )}
                  </div>
                ) : (
                  <div>
                    {Products.confirm.textUserConfirm && (
                      <TextUserConfirm
                        nameUser={this.state.user.nome}
                        phoneUser={this.state.user.telefone}
                        emailUser={this.state.user.email}
                        userCPF={this.state.cpfUser}
                      />
                    )}

                    {Products.confirm.btnConfirm && (
                      <BtnConfirm
                        btnName={"Confirmar"}
                        actionClick={() => this.confirmUser()}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </section>
        ) : null}

        {this.state.captureRegistre ? (
          <section className="captureRegistre">
            {this.state.docFront ? (
              <div>
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
                        <div>
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
                              actionBtnConfirm={() => {
                                if (isMobile) {
                                  document.getElementById(
                                    "modalFront"
                                  ).style.visibility = "hidden";
                                  this.setState({ confirmCaptureFront: true });
                                } else {
                                  this.setState({ confirmCaptureFront: true });
                                }
                              }}
                            />
                          )}
                          {Products.captureRegistre.docFront.confirmCapture && (
                            <CaptureConfirmDocFront
                              showConfirmModal={this.state.confirmCaptureFront}
                              cancelFunction={() =>
                                this.confirmCaptureDocFront(1)
                              }
                              confirmFunction={() =>
                                this.confirmCaptureDocFront(2)
                              }
                            />
                          )}
                        </div>
                      )
                    }
                  />
                )}
              </div>
            ) : (
              <div></div>
            )}

            {this.state.docBack ? (
              <div>
                {Products.captureRegistre.docBack.textTop && <TextTopDocBack />}

                {Products.captureRegistre.docBack.textTip && <TextTipDocBack />}

                {Products.captureRegistre.docBack.modalDocBack && (
                  <ModalDocBack
                    nameBtn={"Capturar Foto "}
                    selectDoc={this.state.disabledSelectDoc}
                    optionRg={"RG"}
                    optionCnh={"CNH"}
                    changeDoc={this.state.typeDoc}
                    changeDocConfirm={(e) => this.changeDoc(e)}
                    modalHeader={this.state.typeDocText + " Verso"}
                    modalBody={
                      Products.captureRegistre.docBack.captureDocBack &&
                      this.state.viewDocBack === false ? (
                        <CaptureDocBack capture={this.captureDocBack} />
                      ) : (
                        <div>
                          {Products.captureRegistre.docBack.imgDocBack && (
                            <ImgDocBack
                              titleImgDocBack={
                                this.state.typeDocText + " Verso"
                              }
                              imgDocBack={this.state.docBackCapture}
                            />
                          )}
                          {Products.captureRegistre.docBack
                            .btnCaptureDocBack && (
                            <BtnCaptureDocBack
                              btnNameReset={"Tirar Novamente"}
                              btnNameConfirm={"Confirmar Foto"}
                              actionBtnReset={() =>
                                this.setState({
                                  docBackCapture: null,
                                  viewDocBack: false,
                                })
                              }
                              actionBtnConfirm={() => {
                                if (isMobile) {
                                  document.getElementById(
                                    "modalBack"
                                  ).style.visibility = "hidden";
                                  this.setState({ confirmCaptureBack: true });
                                } else {
                                  this.setState({ confirmCaptureBack: true });
                                }
                              }}
                            />
                          )}
                          {Products.captureRegistre.docBack.confirmCapture && (
                            <CaptureConfirmDocBack
                              showConfirmModal={this.state.confirmCaptureBack}
                              cancelFunction={() =>
                                this.confirmCaptureDocBack(1)
                              }
                              confirmFunction={() =>
                                this.confirmCaptureDocBack(2)
                              }
                            />
                          )}
                        </div>
                      )
                    }
                  />
                )}
              </div>
            ) : (
              <div></div>
            )}

            {this.state.selfieUser ? (
              <div>
                {Products.captureRegistre.selfieUser.textTop && (
                  <TextTopSelfie />
                )}
                {Products.captureRegistre.selfieUser.textTip && (
                  <TextTipSelfie />
                )}
                {Products.captureRegistre.selfieUser.modalSelfie && (
                  <ModalSelfie
                    nameBtn={"Capturar Selfie"}
                    modalHeader={"Selfie Usuário"}
                    modalBody={
                      Products.captureRegistre.selfieUser.captureSelfie &&
                      this.state.viewSelfie === false ? (
                        <CaptureSelfie capture={this.captureSelfie} />
                      ) : (
                        <div>
                          {Products.captureRegistre.selfieUser.imgSelfie && (
                            <ImgSelfie
                              titleSelfie={"Selfie do Usuario"}
                              imgSelfie={this.state.selfieCapture}
                            />
                          )}
                          {Products.captureRegistre.selfieUser
                            .btnCaptureSelfie && (
                            <BtnCaptureSelfie
                              btnNameReset={"Tirar Novamente"}
                              btnNameConfirm={"Confirmar Foto"}
                              actionBtnReset={() => {
                                this.setState({
                                  selfieCapture: null,
                                  viewSelfie: false,
                                });
                              }}
                              actionBtnConfirm={() => {
                                if (isMobile) {
                                  document.getElementById(
                                    "modalSelfie"
                                  ).style.visibility = "hidden";
                                  this.setState({ confirmCaptureSelfie: true });
                                } else {
                                  this.setState({ confirmCaptureSelfie: true });
                                }
                              }}
                            />
                          )}

                          {Products.captureRegistre.selfieUser
                            .confirmCapture && (
                            <CaptureConfirmSelfie
                              showConfirmModal={this.state.confirmCaptureSelfie}
                              cancelFunction={() =>
                                this.confirmCaptureSelfie(1)
                              }
                              confirmFunction={() =>
                                this.confirmCaptureSelfie(2)
                              }
                            />
                          )}
                          {Products.captureRegistre.loadingCompleteRegister && (
                            <ModalCompleteRegister
                              showLoading={this.state.loadingCompleteRegister}
                              modalHeader={
                                "So um momento, estamos enviando as imagens capturadas para a analise"
                              }
                            />
                          )}
                        </div>
                      )
                    }
                  />
                )}
              </div>
            ) : (
              <div> </div>
            )}
          </section>
        ) : null}

        {this.state.registerComplete ? (
          <div>
            <section className="registerComplete">
              {}
              {Products.registerComplete.textTopRegisterComplete && (
                <TextTopRegisterComplete />
              )}
              {Products.registerComplete.textTipTop && <TextTipTop />}
              {Products.registerComplete.textNotice && <TextNotice />}
              {Products.registerComplete.textTipEnd && <TextTipEnd />}
              {Products.registerComplete.btnRegisterComplete && (
                <BtnRegisterComplete
                  classNameBtnRegisterComplete={"btnRegisterComplete"}
                  btnName={"Ir para o website copart.com.br"}
                  actionClick={() => (window.location.href = Info.urlMemberQA)}
                />
              )}
            </section>
          </div>
        ) : null}
      </div>
    );
  }
}
