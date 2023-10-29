interface CatFactDisplayProps {
    fact: string;
    loadingFactSuccess: boolean;
}
  
export default function CatFactDisplay(props: CatFactDisplayProps) {
    const { fact, loadingFactSuccess } = props;
    return (
      <div>
        {loadingFactSuccess ? 
          (<div>{fact}</div>) :
          (<div>Error loading fact, try again later.</div>)}
      </div>
    );
}