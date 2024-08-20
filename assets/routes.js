import { routeTypes } from './consts.js'

const routeParamsAndReturn = params => {
    let { req, res, data } = params
    const { type: routeType } = req.params
    let {
        index,
        max,
        page,
        search
    } = req.query

    index = parseInt(index)
    max = parseInt(max)
    page = page ? parseInt(page) || 1 : undefined

    if(isNaN(index) && search) {
        data = data.filter(item => item[routeTypes[routeType].searchBy].toLowerCase().includes(search.trim().toLowerCase()))
    }

    if(index || index === 0) {
        if(index <= data.length && index >= 0) return res.status(200).json(data[index])

        throw new Error('Invalid Index')
    }else if(max && page) {
        if(page <= Math.ceil(data.length / max) && page > 0 && max > 0) return res.status(200).json(data.slice(max * (page - 1), max * page))

        throw new Error('Invalid Params')
    } else if(max && !page) {
        if(max > 0) return res.status(200).json(data.slice(0, max))

        throw new Error('Parameter "max" should be greater than 0')
    }

    res.status(200).json(data)
}

const getFileData = async (routeType) => {
    const { default: data } = await import(`../assets/data/${ routeType }.js`)
    return data
}

export const routeStructure = async (req, res) => {
    const { type: routeType } = req.params

    if(!Object.keys(routeTypes).includes(routeType)) return res.status(404).json({ error: 'Invalid type of data' })
        
    try {
        const data = await getFileData(routeType)
        routeParamsAndReturn({ req, res, data })
    }catch({ message, code }) {
        res.status(404).json({ error: message || code })
    }
}

export const homePage = (req, res) => {
    res.status(200).json({
        message: 'The Mages API provides information about mages, spells, and books across different elemental types such as Fire, Earth, Water, and Air. The API allows users to retrieve detailed data on mages, spells, and books related to magic in a structured JSON format.',
        repo: 'https://github.com/ricmrs/mages-api',
    })
}