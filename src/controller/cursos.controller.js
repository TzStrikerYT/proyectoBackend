export const createCursos = async (req, res) => {
    console.log(req.body)

    // destruir objeto que llega del request
    const {name, price, category, brand, imgUrl} = req.body
    res.json({msg: "hola"})


    //definir el nuevo curso
    const newCurso = new newCurso({
        name,
        price,
        category,
        brand,
        imgUrl
    })

    const cursoSaved = await newCurso.save()
 
    res.status(201).json(cursoSaved)
}

export const getCursos = async (req, res) => {
    const cursos = await Cursos.find()

    res.status(200).json(cursos)
    
}

export const getCursosById = async (req, res) => {
    console.log(req.params)
    console.log(req.params.cursoId)
    try {
        const cursos = await Cursos.findById(req.params.cursoId)
        console.log(cursos)
        if (cursos != null){
            res.status(200).json(cursos)
        } else {
            res.status(200).json({error: "El producto no existe"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}
