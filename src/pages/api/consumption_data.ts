import { generate24HoursData, generateDataBeforeCurrentTime, generateFifteenDaysData, generateSevenDaysData } from '@/utils/GenerateConsumptionData';
import type { NextApiResponse, NextApiRequest } from 'next'


type Data = {
    date: String,
    duches: number,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    let temp_data: Data[] = [];
    if (req.body.val == "7 days") {
        temp_data = generateSevenDaysData();
    } else if (req.body.val == "15 days") {
        temp_data = generateFifteenDaysData();
    } else  {
        temp_data = generateDataBeforeCurrentTime();
    }
    res.status(200).json(temp_data);
}
