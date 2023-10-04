import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell
} from "recharts";


interface Props {
    x_key: string,
    data_key: string
}

type Data = {
    date: String,
    duches: number,
}

export default function SimpleBarChart({ props, val }: { props: Props, val: string }) {
    const [focusBar, setFocusBar] = useState<Number | undefined>(undefined);
    const [data, setData] = useState<Data[] | null>(null);
    const [originalData, setOriginalData] = useState<Data[] | null>(null);
    const [today] = useState<String>(new Date().getDate().toString().padStart(2, "0") + "/" +
        (new Date().getMonth() + 1).toString().padStart(2, "0"));

    useEffect(() => {
        fetch("/api/consumption_data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                val: '24 hours'
            }),
        }).then(res => res.json())
            .then(data => {
                setData(data)
                setOriginalData(data)
            })
    }, [val]);


    useEffect(() => {
        if (data === null) return;
    }, [originalData])




    if (data === null) return <div>Loading...</div>

    return (
        <BarChart
            width={800}
            height={170}
            data={data}
            margin={{
                top: 25, right: 30,
                left: 20, bottom: 5
            }}
            onMouseMove={state => {
                if (state.isTooltipActive) {
                    setFocusBar(state.activeTooltipIndex);
                } else {
                    setFocusBar(undefined);
                }
            }}
        >
            <XAxis dataKey={props.x_key} tickLine={{ stroke: "#A0AFC4", transform: val==="120 days"? 'translate(0, 3)' : 'translate(3, 3)' }} axisLine={false} padding={{ left: 25, right: 20 }} fontSize={val==="24 hours"? 12 : 14} tick={{ fill: "#A0AFC4", transform: 'translate(0, 3)' }} interval={val === "24 hours" ? 8 : val === "15 days" ? 1 : 0}
            />
            <YAxis domain={[0, 50]} tickCount={5} tick={{ fill: "#A0AFC4" }} axisLine={false} interval={0} tickLine={{ stroke: "#A0AFC4" }} fontSize={12} />
            <Tooltip cursor={{ fill: "transparent" }} formatter={(value: any) =>value.toFixed(2)} />
            <Bar dataKey={props.data_key} barSize={4}  >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`#1d51ab`} width={val === "24 hours" ? 5 : val === "15 days" ? 10 : 25} opacity={focusBar === index || entry.date === today ? '1' : '0.4'} />
                ))}
            </Bar>
        </BarChart>
    );
}