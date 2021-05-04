export const createResgistros = async (req, res) => {
    console.log(req.body)

    // destruir objeto que llega del request
    const {name, price, category, brand, imgUrl} = req.body
    res.json({msg: "hola"})


    //definir el nuevo registro
    const newRegistro = new newRegistro({
        name,
        price,
        category,
        brand,
        imgUrl
    })

    const RegistroSaved = await newRegistro.save()
 
    res.status(201).json(RegistroSaved)
}

export const getRegistro = async (req, res) => {
    const Registros = await Registros.find()

    res.status(200).json(registros)
    
}

export const getRegistrosById = async (req, res) => {
    console.log(req.params)
    console.log(req.params.registroId)
    try {
        const registros = await Registros.findById(req.params.noticiaId)
        console.log(registros)
        if (registros != null){
            res.status(200).json(registros)
        } else {
            res.status(200).json({error: "El producto no existe"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}