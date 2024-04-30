import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { client } from "../../lib/crud";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await client.set(`note:${title}`, { title, content });
    if (success) {
      toast({
        title: "Note created.",
        description: "Your note has been successfully created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTitle("");
      setContent("");
    } else {
      toast({
        title: "Error",
        description: "There was an error creating your note.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" placeholder="Note title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea id="content" placeholder="Note content" value={content} onChange={(e) => setContent(e.target.value)} />
        </FormControl>
        <Button mt={4} colorScheme="blue" type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default CreateNote;