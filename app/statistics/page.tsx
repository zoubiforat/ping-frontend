"use client"

import React, { useEffect, useState } from "react";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../components/ui/table";
import axios from "axios";
import { BASE_API_URL } from "../shared/consts";
import { Button } from "../../components/ui/button";

const StatisticsPage = () => {

    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        const loadPings = async () => {
            const response = await axios.get(`${BASE_API_URL}/ping-statistic/top`);
            setStatistics(response.data);
        }

        loadPings();
     }, []);

    //  const resetStatistics = async () => {
    //     await axios.delete(`${BASE_API_URL}/ping-statistic`);
    //     setStatistics([]);
    //  }

return <>
        <h1 className="font-bold">Statistics Page</h1>
        <Table>
            <TableCaption>A list of your top pings.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Host</TableHead>
                    <TableHead>Count</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {statistics.map((statistic: {host:string, count: number}) => (
                <TableRow key={statistic.host}>
                    <TableCell className="font-medium">{statistic.host}</TableCell>
                    <TableCell>{statistic.count}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
        {/* <Button onClick={resetStatistics}>Reset Statistics</Button> */}
    </> 
}

export default StatisticsPage;