import { useSelector } from 'react-redux';
import { Color } from './Color/Color';
import { ColorLable } from './ColorLable/ColorLable';
import s from './ColorList.module.scss'

export const ColorList = ({colors, selectedColor, handleColorChange}) => {
    console.log('colors:', colors)
    const {colorList} = useSelector(state => state.color);
    console.log('colorList', colorList);

    return handleColorChange ? (
        <div className={s.colorList}>
            {colors?.map((id, i) => {
                const color = colorList.find(color => color.id === id);
                return <ColorLable key={id} 
                color={color} 
                check={!i}
                selectedColor={selectedColor}
                handleColorChange={handleColorChange}
                />
            })}
        </div>
        ) : (
        <ul className={s.colorList}>
            {colors.map((id, i) => {
                const color = colorList.find(color => color.id === id);
                return <Color key={id} color={color?.code} check={!i}/>
            })}
        </ul>
    )

}