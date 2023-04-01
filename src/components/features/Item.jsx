export default function Item({imgSrc, altText,title,children}) {
    return (
        <div className="feature-item">
            <img src={imgSrc} alt={altText} className="feature-icon"
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {children}
            </p>
        </div>
    )
}