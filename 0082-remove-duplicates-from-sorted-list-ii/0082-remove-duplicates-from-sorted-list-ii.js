/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // if(!head) return head;
    // let index = head;
    // let previous = null;
    // while(index){
    //     let repeat = false;
    //     while(index.next && index.val == index.next.val){
    //         index = index.next;
    //         repeat = true;
    //     }
    //     if(repeat){
    //         index = index.next;
    //         if(previous) previous.next = index;
    //     }else{
    //         if(previous==null) head = index;
    //         previous = index;
    //         index = index.next;
    //     }
    //     // console.log(index, previous);
    // }

    // if(previous == null) return null;
    // return (head);

    if(!head) return head;
    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let index = head;
    let prevIndex = dummyNode;
    while(index){
        let repeat = false;
        while(index.next && index.val == index.next.val){
            repeat = true;
            index = index.next;
        }
        if(repeat) prevIndex.next = index.next;
        else prevIndex = prevIndex.next;
        index =index.next;
    }
    return dummyNode.next;
};