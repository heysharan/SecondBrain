import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModel } from "../components/ui/CreateContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh()
  }, [modelOpen])

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Sidebar />
      <div className="p-4 ml-76">
        <CreateContentModel
          open={modelOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />
        <div className="flex justify-between mt-3">
          <p className="flex font-extrabold text-black text-4xl">All Notes</p>
          <div className="flex justify-end gap-4 mb-8">
            <Button
              startIcon={<ShareIcon />}
              variant="secondary"
              text="Share Brain"
              onClick={async() => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                  share: true
                }, {
                  headers: {
                    token: localStorage.getItem('token')
                  }
                })
                const shareUrl = `http://localhost:5173${response.data.hash}`
                alert(shareUrl) 
              }}
            />
            <Button
              onClick={() => {
                setModelOpen(true);
              }}
              startIcon={<PlusIcon />}
              variant="primary"
              text="Add Content"
            />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card
              type={type}
              link={link}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
