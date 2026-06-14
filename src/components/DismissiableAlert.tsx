import { ReactNode } from "react";

interface DismissiableAlertProp{
    children: ReactNode;
    onClose: () => void;
}


function DismissiableAlert({children, onClose} : DismissiableAlertProp) {
    return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{children}</strong>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
</div>
);
}

export default DismissiableAlert;