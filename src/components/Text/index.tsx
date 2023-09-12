import styles from './Text.module.css';

interface Props {
    content: string;
}

const Text = (props: Props) => {

    return (
        <div>
            <p className={styles.text}>{props.content}</p>
        </div>
    )
};

export default Text