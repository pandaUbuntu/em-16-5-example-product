import './style.css'


type BlogShortCardProps = {
    title: string,
    createdDate: Date;
}

function BlogShortCard(props:BlogShortCardProps) {

    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    };

  return (
    <div className="blog-short-card-container">
        <h3>{props.title}</h3>
        <p>{new Intl.DateTimeFormat('en-US', options).format(props.createdDate)}</p>
    </div>
  )
}

export default BlogShortCard
