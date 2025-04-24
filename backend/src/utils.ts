export const random = (len: number) => {
    const options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const optionsLength = options.length;
    let random = ''
    for (let i = 0 ; i < len ; i++){
        random += options[Math.floor(Math.random() * optionsLength)]
    }
    return random 
}