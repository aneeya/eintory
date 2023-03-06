

export async function signup(newUser) {
  const response = await fetch('/signup', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if(response.status === 200) {
    location.replace('/create-eintory')
  }
}