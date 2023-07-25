import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchAll } from "../../features/goodsSlice";
import s from "./SearchPage.module.scss"

export const SearchPage = () => {
    const { goodsList } = useSelector(state => state.goods);
    const dispatch = useDispatch();
    let [searchParams] = useSearchParams

    useEffect(() => {
        const search = searchParams.get('q');
        const params = { search };
        dispatch(fetchAll(params));
    }, [searchParams, dispatch]);

    return (
        goodsList.length ?
        <Goods title='Результат поска'/>
        : 
        <h3 className={s.empty}>По Вашему запросу {searchParams.get('q')} ничего не найдено</h3>
    )
}