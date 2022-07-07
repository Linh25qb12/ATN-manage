import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const EditProduct = ({product}) => {
    const [form, setForm] = useState({ name: product.data.name, description: product.data.description, quantity: product.data.quantity });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();
    console.log(product);

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updateProduct();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const updateProduct = async () => {
        try {
            const res = await fetch(`https://atn-manage-terminatorxxd.vercel.app/api/products/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/product");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.name) {
            err.name = 'Title is required';
        }
        if (!form.description) {
            err.description = 'Description is required';
        }
        if (!form.quantity) {
            err.quantity = 'Quantity is required';
        }

        return err;
    }

    return (
        <div className="form-container">
            <h1>Update Product</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.name ? { content: 'Please enter a name', pointing: 'below' } : null}
                                label='Name'
                                placeholder='Name'
                                value={form.name}
                                name='name'
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='Descriprtion'
                                placeholder='Description'
                                name='description'
                                value={form.description}
                                error={errors.description ? { content: 'Please enter a description', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                             <Form.Input
                                fluid
                                type="number"
                                value={form.quantity}
                                error={errors.name ? { content: 'Please enter quanity', pointing: 'below' } : null}
                                label='Quanity'
                                name='quantity'
                                onChange={handleChange}
                            />
                            <Button type='submit'>Update</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ query: { id } }) => {
    const res = await fetch(`https://atn-manage-terminatorxxd.vercel.app/api/products/${id}`);
    const product = await res.json();
  
    return{
      props: {product}
    }
  }

export default EditProduct;