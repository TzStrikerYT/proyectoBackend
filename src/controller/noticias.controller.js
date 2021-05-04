export const createNoticias = async (req, res) => {
    console.log(req.body)

    // destruir objeto que llega del request
    const {name, price, category, brand, imgUrl} = req.body
    res.json({msg: "hola"})


    //definir el nueva  noticia
    const newNoticia = new newNoticia({
        name,
        price,
        category,
        brand,
        imgUrl
    })

    const noticiaSaved = await newNoticia.save()
 
    res.status(201).json(noticiaSaved)
}

export const getNoticias = async (req, res) => {
    const noticias = await Noticias.find()

    res.status(200).json(noticias)
    
}

export const getNoticiasById = async (req, res) => {
    console.log(req.params)
    console.log(req.params.noticiaId)
    try {
        const noticias = await Noticias.findById(req.params.noticiaId)
        console.log(noticias)
        if (noticias != null){
            res.status(200).json(noticias)
        } else {
            res.status(200).json({error: "El producto no existe"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}