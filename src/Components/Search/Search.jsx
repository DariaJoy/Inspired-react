import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Container } from '../Layout/Container/Container'
import s from './Search.module.scss'
import * as Yup from 'yup'
import { toggleSearch } from '../../features/searchSlice'

export const Search = () => {
    const {openSearch} = useSelector((state) => state.search);
    const initialValues = {
        search: '',
    };
    const validationSchema = Yup.object({
        search: Yup.string().required('Введите запрос*')
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlSubmit = ({search}, { resetForm }) => {
        if (search.trim()) {
            navigate(`/search?q=${search}`);
            resetForm();
            dispatch(toggleSearch(false));
        }
    }
        return (
            openSearch && (
                <div className={s.search}>
                    <Container>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handlSubmit}>
                            <Form className={s.form}>
                                <Field type="search" name="search" placeholder='Найти...' className={s.input}/>
                                <ErrorMessage name='search' component={'p'} className={s.error}/>
                                <button className={s.btn} type='submit'>Искать</button>
                            </Form>
                        </Formik>
                    </Container>
                </div>
            )
        )
} 