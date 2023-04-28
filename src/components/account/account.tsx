type Props={
    title: string,
    amount:string,
    amountDescription:string,
}

export default function Account({title,amount,amountDescription}:Props) {
    return (
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{amount}</p>
                    <p className="account-amount-description">{amountDescription}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </>
    )
}