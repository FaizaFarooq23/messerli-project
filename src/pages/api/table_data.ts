// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TableGeneratorFunction } from '@/utils/TableGeneratorFunction'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    prise: string,
    travail: string,
    localisation: string,
    etage: string,
    zone: string,
    shutdown: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    let temp_data: Data[] = TableGeneratorFunction();
    res.status(200).json(temp_data)
}


