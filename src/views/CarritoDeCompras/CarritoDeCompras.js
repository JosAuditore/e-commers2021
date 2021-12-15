import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import TarjetaDeCompras from "../../components/TarjetaDeCompras/TarjetaDeCompras";
import Total from "../../Total";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    },
}));

const CarritoDeCompras = () => {
    const classes = useStyles();
    const [ producto, setProducto] = useState();
    const [ {basket}, dispatch ] = useStateValue();

    useEffect(() => {
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item`)
        .then((response) => {
            console.log(response.data);
        if(response.status === 200){
            setProducto(response.data);
        }
        }).catch((error) => {
            console.log(error)
        })
    },[])

    function FromRow(){
        return(
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={ 12 } sm={ 8 } md={6} lg={4}>
                        <TarjetaDeCompras  key={item._id}  producto={item}/>
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return(
        <div className={ classes.root}>
            <Grid container spacing={3}>
                <Typography aling="center" gutterBottom variant="h4">
                    Carrito de Compras
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FromRow/>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Typography align="center" gutterBottom variant="h4">
                    <Total/>
                </Typography>
            </Grid>
        </div>
    );
}



export default CarritoDeCompras;