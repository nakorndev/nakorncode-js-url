const url = new URL('http://example.com/users?name=John&age=18&age=19&age=20')

// https://, http://    <-- protocol
// example.com          <-- domain, hostname
// /users               <-- pathname, path
// ?name=John&age=18    <-- querystring, searchparams

console.log(url.searchParams.get('age'))
console.log(url.searchParams.getAll('age'))
console.log(url.searchParams.toString().split('&'))

url.searchParams.append('is_student', 'true')
console.log(url.searchParams.toString())

for (let [key, value] of url.searchParams.entries()) {
    console.log(key, '=',value)
}
