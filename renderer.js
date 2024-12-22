const information = document.getElementById('info')
information.innerHTML = `This app is using Chrome(v${versions.chrome()}), Node(v${versions.node()}), and Electron(v${versions.electron()})`

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // pong
}

func()
