export default function Container({ children }) {
    return (
        <div
            style={
                {
                    display: 'flex',
                    flexWrap: 'nowrap'
                }
            }
        >
            {children}
        </div>
    )
}
