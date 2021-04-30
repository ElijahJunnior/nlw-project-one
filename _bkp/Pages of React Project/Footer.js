export default function Footer(props) {
    return (
        <footer style={{ 'color': props.text_color }}>
            <hr />
            <p style={{ 'textAlign': 'center' }} > Desenvolvido por: {props.children} </p>
        </footer>
    )
}