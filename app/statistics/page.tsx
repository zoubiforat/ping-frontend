import React from "react";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../components/ui/table";

const StatisticsPage = () => {
    const statistics = [
        {
            host: "google.com",
            count: 31,
        },
        {
            host: "facebook.com",
            count: 15,
        },
        {
            host: "amazon.de",
            count: 153,
        },
        {
            host: "ynet.co.il",
            count: 9,
        }
    ];
    return <>
        <h1 className="font-bold">Statistics Page</h1>
        <Table>
            <TableCaption>A list of your recent pings.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Host</TableHead>
                    <TableHead>Count</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {statistics.map((statistic) => (
                <TableRow key={statistic.host}>
                    <TableCell className="font-medium">{statistic.host}</TableCell>
                    <TableCell>{statistic.count}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </> 
}

export default StatisticsPage;