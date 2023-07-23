import React from 'react'

const ResetPassword = () => {
    const [reset, setReset] = useState(false);
    const [resetSent, setResetSent] = useState(false);
  return (
    <>
        <div className="reset-form">
        <GrClose size={30} className="close-icon" onClick={toggleLogin} />
        {resetSent ? <>
          <Form >
            <h2 className="mb-4">Forgot Password</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" name="email" placeholder="Email address" />
            </FloatingLabel>
            <div className="text-center">
              <Button variant="success" className="mb-2" type="submit">
                {!loading ? 'Reset' : <Loader />}
              </Button>
            </div>
        </Form>
        </> : <>
        <Form >
            <h2 className="mb-4">Reset Password</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" name="password" placeholder="New Password" />
            </FloatingLabel>
            <div className="text-center">
              <Button variant="success" className="mb-2" type="submit">
                {!loading ? 'Reset' : <Loader />}
              </Button>
            </div>
        </Form>
        </>}
      </div>
    </>
  )
}

export default ResetPassword