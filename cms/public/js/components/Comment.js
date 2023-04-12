export default {
    name: "TheCommentThumb",
  
    props: {
      comment: Object,
      filteredComments: Array,
    },
  
    data() {
      return {
        isEditing: false,
        editedComment: "",
      };
    },
  
    computed: {
      formattedDate() {
        const date = new Date(this.comment.created_at);
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        return date.toLocaleDateString("en-US", options)
          .split("/")
          .reverse()
          .join("-");
      },
    },
  
    methods: {
      editComment() {
        // Save the original comment content before editing
        this.editedComment = this.comment.content;
        this.isEditing = true;
      },
  
      cancelEdit() {
        // Restore the original comment content
        this.comment.content = this.editedComment;
        this.isEditing = false;
      },
  
      saveComment() {
        // Send the updated comment to the server
        const data = {
          content: this.comment.content,
        };
        fetch(`http://localhost:8000/comments/${this.comment.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            this.isEditing = false;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
  
      deleteComment() {
        // Send a request to delete the comment to the server
        fetch(`http://localhost:8000/comments/${this.comment.id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            // Remove the deleted comment from the filteredComments array
            const index = this.filteredComments.findIndex(
              (c) => c.id === this.comment.id
            );
            if (index !== -1) {
              this.filteredComments.splice(index, 1);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    },
  
    template: `
      <div class="comment" :id="'comment-' + comment.id">
        <div class="comhead">
          <h3>{{ comment.user }}</h3>
          <h3>Commented on: {{ formattedDate }}</h3>
        </div> 
  
        <template v-if="isEditing">
          <div class="comform">
            <textarea class="commentEdit" v-model="comment.content"></textarea>
            <div class="btns editing">
              <button class="save" @click="saveComment">Save</button>
              <button class="cancel" @click="cancelEdit">Cancel</button>
            </div>
          </div>
        </template>
  
        <template v-else>
          <p>{{ comment.content }}</p>
          <div class="btns">
            <button class="edit" @click="editComment">Edit</button>
            <button class="delete" @click="deleteComment">Delete</button>
          </div>
        </template>
      </div>
    `
  };
  