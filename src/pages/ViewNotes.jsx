import { Box, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { FaRegStickyNote } from "react-icons/fa";
import { useEffect, useState } from "react";
import { client } from "../../lib/crud";

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await client.getWithPrefix("note:");
      if (data) {
        setNotes(data.map(item => ({ key: item.key, ...item.value })));
      }
    };
    fetchNotes();
  }, []);

  return (
    <Box p={4}>
      <List spacing={3}>
        {notes.map(note => (
          <ListItem key={note.key}>
            <ListIcon as={FaRegStickyNote} color="green.500" />
            {note.title}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ViewNotes;