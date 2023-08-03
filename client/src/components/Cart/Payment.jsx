import { PaymentElement } from '@stripe/react-stripe-js'
import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const Payment = () => {
  return (
    <>
        <Container style={{ marginTop: "4rem" }}>
            <Form>
                <PaymentElement />
                <Button>Submit</Button>
            </Form>
        </Container>
    </>
    )
}

export default Payment