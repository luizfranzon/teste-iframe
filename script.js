function handleLoadPacifcoLoginPageIframe() {
  console.log("handleLoadPacifcoLoginPageIframe");
  const pacifcoIframe = document.querySelector("#pacifco-iframe");

  const pacifcoLoginUsernameInput =
    pacifcoIframe.contentWindow.document.querySelector("#UserName");
  const pacifcoLoginPasswordInput =
    pacifcoIframe.contentWindow.document.querySelector("#Password");

  console.log(pacifcoLoginUsernameInput, pacifcoLoginPasswordInput);

  pacifcoLoginUsernameInput.value = "admin";
  pacifcoLoginPasswordInput.value = "admin";
}
