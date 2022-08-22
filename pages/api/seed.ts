import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if ( process.env.NODE_ENV === 'production') {
        return res.status(401).json({
            message: 'No tiene acceso a este servicio'
        })
    }

    await db.connect()



    await db.disconnect()

    res.status(200).json({ message: 'Proceso Realizado correctamente' })
}

/*
    Config ENV

    MONGO_DB_URL=mongodb+srv://alexis:alexis09@open-jira-db.rlued81.mongodb.net/?retryWrites=true&w=majority

    NEXT_PUBLIC_CLIENT_KEY=ASDSDA323

*/