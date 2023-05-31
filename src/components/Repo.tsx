import classes from './Repo.module.css'
import { repoProps } from '../types/repo'




export const Repo = ({ name, description, url }: repoProps) => {
    return (
        <div className={classes.repo}>
            <h1>{name}</h1>
            <p>{description}</p>
            <a href={url} target='_blank' rel='noreferrer noopener'>Acessar esse repositório</a>
        </div>
    )
}
