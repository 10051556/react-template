
import * as React from "react";
import { ThemeProvider, FormGroup, TextInput } from '@primer/components';

import { useForm } from "react-hook-form";
import axios from "axios";
import CryptoJS from "crypto-js";


function Enquiry() {



    const onSubmit = async (data) => {

        const { mid, transaction_id, secret_key, apikey, myResponse } = data;
        let hash = CryptoJS.SHA256(mid + "," + transaction_id + "," + secret_key).toString();

        var jsondata = JSON.stringify({
            "mid": mid,
            "apikey": apikey,
            "transaction_id": transaction_id,
            "hash": hash
        });

        var config = {
            method: 'post',
            url: 'https://103.255.252.10/payment/v1/enquiry',
            headers: {
                'Content-Type': 'application/json'
            },
            data: jsondata
        };


        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    return (
        <ThemeProvider dayScheme="dark_dimmed" nightScheme="dark_dimmed">

            <div>
                <h2>Enquiry</h2>

                <form onSubmit={(e) => e.preventDefault()}>

                    <label>mid</label>
                    <input {...register("mid")} defaultValue='mid_wp_001' />

                    <label>apikey</label>
                    <input {...register("apikey")} defaultValue='6nwFkMCnaGRNwQAtdzBhekbJjlMhmdV4nbBrhWU' />

                    <label>transaction_id</label>
                    <input {...register("transaction_id")} defaultValue='dev-21110915490914995486437312' />


                    <label>secret_key</label>
                    <input {...register("secret_key")} defaultValue='5JKN1umR9WefrQxfbQLCbWVlx6EHw5gkJlpXod7xJs' />

                    <input type="submit" onClick={handleSubmit(onSubmit)} />
                </form >
            </div>

            <div>

                <FormGroup>
                    <FormGroup.Label htmlFor="example-text">Example text</FormGroup.Label>
                    <TextInput id="example-text" value="Example Value" />
                </FormGroup>

                <FormGroup>
                    <FormGroup.Label htmlFor="example-text-b">Example text</FormGroup.Label>
                    <TextInput id="example-text-b" value="Example Value" />
                </FormGroup>

            </div>
        </ThemeProvider>
    );


}


function response() {


}
export default Enquiry