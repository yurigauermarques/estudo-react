
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}


function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Bem Vindo
        </h1>
            <p className="Dialog-message">
                Obrigado por visitar a nossa espaçonave!
        </p>
        </FancyBorder>
    )
}

export default WelcomeDialog;