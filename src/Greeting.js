import Mailbox from './Mailbox';

function UserGreeting(props) {
    // const messagens =[];
    const messagens = ['React', 'Re: React', 'Re: Re: React'];
    return (
        <div>
            <h1>Welcome back!</h1>
            <Mailbox unreadMessages={messagens} />
        </div>
    );
}

function GuestGreeting(props) {
    return <h1>Please sig up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting;