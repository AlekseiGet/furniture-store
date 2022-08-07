export const getComentCount = (totalComent, limit ) => {
    return Math.ceil(totalComent / limit)
}