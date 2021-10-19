const baseUrl = 'https://assets.breatheco.de/apis/fake/todos/user/jiramos87'

const getAll = () => {
    const request = fetch(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = fetch(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = fetch(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = fetch(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, deletePerson }