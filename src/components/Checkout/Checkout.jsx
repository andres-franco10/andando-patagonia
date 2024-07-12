import React, { useState, useContext } from 'react'
import Context from '../../context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Flex,
    Button,
  } from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })

    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const {cart, getTotal, clearCart} = useContext (Context)
    const navigate = useNavigate()


    const updateUser = (event) => {
        setUser ((user) => ({
            ...user,
            [event.target.name] : event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name) {
            errors.name = 'Tenés que agregar un nombre' 
        }else if(user.name.length < 4) {
            errors.name = 'El nombre debe tener al menos 4 caracteres'
        }
        
        if(!user.email){
            errors.email = 'Tenés que agregar un email'
        }else if(!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'El email no es válido'
        }

        if(!user.repeatedEmail){
            errors.repeatedEmail = 'Tenés que agregar un email'
        }else if(!/\S+@\S+\.\S+/.test(user.email)) {
            errors.repeatedEmail = 'El email no es válido'
        }else if (user.repeatedEmail !== user.email) {
            errors.repeatedEmail = 'No coincide con el email ingresado previamente'
            
        }


        setError(errors)
        return Object.keys(errors).length === 0

    }




    const getOrder = async () =>{

        if(!validateForm()){
            return
        }

        
        const coleccion = collection(db, 'orders')

        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
            }

            const orderRef = await addDoc(coleccion, order)

            Swal.fire({
                title: "Gracias por elegirnos",
                text: `¡ Ya podés ir armando la mochila ! Tu número de orden es: ${orderRef.id}. Pronto te escribiremos a tu Email para darte más detalles`,
                icon: 'success',
                confirmButtonText: "Volver a Inicio",
                confirmButtonColor: '#55868C'
                
                }).then(() => {
                    clearCart()
                    navigate('/')
                    
                });

            
        } catch (error) {
            console.log(error)
            
        }

    }


  return (
    <Flex padding={'50px'} justifyContent={'center'}>
        
        <FormControl width={'50%'} isInvalid= {Object.keys(error).length > 0} >
            
                    <FormLabel>Nombre</FormLabel>
                    <Input 
                        type='text' 
                        name='name'
                        placeholder='Andres Franco'
                        onChange={updateUser}
                        />
                    <FormErrorMessage>{error.name}</FormErrorMessage>
                    <FormLabel>Email</FormLabel>
                    <Input 
                        type='email' 
                        name='email'
                        placeholder='andres@franco.com'
                        onChange={updateUser}
                        />
                        
                    <FormErrorMessage>{error.email}</FormErrorMessage>
                    <FormLabel>Repetir email</FormLabel>
                    <Input
                        type='email' 
                        name='repeatedEmail'
                        placeholder='andres@franco.com'
                        onChange={updateUser}/>
                    <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>
                    <FormLabel>Teléfono</FormLabel>
                    <Input
                     type='number'
                     name='phone'
                     onChange={updateUser}
                     />
                   <Button bg={'green.200'} _hover={{ bg: 'green.600', color: '#fff' }} mt={'8px'}  onClick={getOrder}>Finalizar Compra</Button>
        </FormControl>
        
    </Flex>
  )
}

export default Checkout
