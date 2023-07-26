import { Triangle } from 'react-loader-spinner';

const style = {
    display: 'flex',
    justifyContent: 'center',
    padding: '200px 0',
}

export const Preloader = () => (
    <div style={style}>
        <Triangle 
            height="100"
            width="100"
            color="#8a8a8a"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>
)