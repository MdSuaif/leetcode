/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let i = new ListNode(-1)
    let j = i

    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            j.next = list1
            list1 = list1.next
        }else{
            j.next = list2
            list2 = list2.next
        }
        j = j.next
    }
    if(list1 !== null){
        j.next = list1
    }
    else{
        j.next = list2
    }

    return i.next
    
};