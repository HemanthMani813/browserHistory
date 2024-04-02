import './index.css'

const ItemElement = props => {
  const {itemDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const ondeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="card">
      <div>
        <p>{timeAccessed}</p>
        <div>
          <img src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button data-testid="delete" type="button" onClick={ondeleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ItemElement
