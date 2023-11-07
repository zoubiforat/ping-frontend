"use client"

import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { postExecuterSchema } from "./post-executer.schema";
import { PostExecuterForm } from "./executer-form";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "../../components/ui/card";

const ExecuterPage = () => {

    const [logs, setLogs] = useState("");

    const form = useForm<z.infer<typeof postExecuterSchema>>({
        resolver: zodResolver(postExecuterSchema),
        defaultValues: {},
    });

    const exectuePings = async (data: {host: string, count: number}) => {
        const response = await axios.post('http://192.168.5.129:3000/ping-executer', data);
        setLogs(response.data);
    }

    const onSubmit = form.handleSubmit((executer) => {
        setLogs("Executing Ping...");
        exectuePings({...executer, count: executer.count[0]});
    });

    return <>
        <PostExecuterForm form={form} onSubmit={onSubmit} ></PostExecuterForm>
        <Card>
            <CardContent className="p-6 whitespace-pre">
                {logs}
            </CardContent>
        </Card>
    </> 
}

export default ExecuterPage;