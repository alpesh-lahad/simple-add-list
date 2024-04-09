import styles from './Container.module.css';

function Container({ children }) {
    return (
        <>
            <div className={`${styles['container-wrap']}`}>
                {children}
            </div>
        </>
    )
}

export default Container;